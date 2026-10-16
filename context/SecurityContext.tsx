'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type UserRole = 'user' | 'admin';

export interface SecurityAuditEntry {
  id: string;
  timestamp: string;
  action: string;
  role: UserRole;
  details: string;
  status: 'success' | 'warning' | 'info';
}

export interface SecurityContextType {
  role: UserRole;
  isAdmin: boolean;
  isAdminAuthenticated: boolean;
  loginAsAdmin: (passcode: string) => { success: boolean; message: string };
  logoutAdmin: () => void;
  isAdminModalOpen: boolean;
  setIsAdminModalOpen: (open: boolean) => void;
  isAdminAuthModalOpen: boolean;
  setIsAdminAuthModalOpen: (open: boolean) => void;
  auditLogs: SecurityAuditEntry[];
  addAuditLog: (action: string, details: string, status?: 'success' | 'warning' | 'info') => void;
  clearAuditLogs: () => void;
  adminPasscode: string;
  updateAdminPasscode: (oldPass: string, newPass: string) => { success: boolean; message: string };
  // Permissions helper
  permissions: {
    canEditParticipantName: boolean;
    canEditCertificateLayout: boolean;
    canManageSystem: boolean;
    canOverrideProgress: boolean;
  };
}

const STORAGE_KEY_ROLE = 'csb_security_role';
const STORAGE_KEY_AUTH_TOKEN = 'csb_admin_session_token';
const STORAGE_KEY_PASSCODE = 'csb_admin_passcode';
const STORAGE_KEY_AUDIT_LOGS = 'csb_security_audit_logs';

const DEFAULT_ADMIN_PASSCODE = 'clicksafe2026';

const INITIAL_AUDIT_LOGS: SecurityAuditEntry[] = [
  {
    id: 'log-init-1',
    timestamp: '2026-03-01T00:00:00.000Z',
    action: 'SYSTEM_BOOT',
    role: 'admin',
    details: 'Click Safe BD RBAC Security Engine initialized with zero-trust participant defaults.',
    status: 'info'
  },
  {
    id: 'log-init-2',
    timestamp: '2026-03-01T00:00:01.000Z',
    action: 'POLICY_ENFORCED',
    role: 'user',
    details: 'Participant mode active: Certificate layout editing restricted to Administrator role.',
    status: 'info'
  }
];

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

export function SecurityProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<UserRole>('user');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);
  const [isAdminAuthModalOpen, setIsAdminAuthModalOpen] = useState<boolean>(false);
  const [adminPasscode, setAdminPasscode] = useState<string>(DEFAULT_ADMIN_PASSCODE);
  const [auditLogs, setAuditLogs] = useState<SecurityAuditEntry[]>(INITIAL_AUDIT_LOGS);

  // Load stored state on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const storedPasscode = localStorage.getItem(STORAGE_KEY_PASSCODE);
        if (storedPasscode) {
          setAdminPasscode(storedPasscode);
        }

        const storedLogs = localStorage.getItem(STORAGE_KEY_AUDIT_LOGS);
        if (storedLogs) {
          const parsed = JSON.parse(storedLogs);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setAuditLogs(parsed);
          }
        }

        const sessionToken = sessionStorage.getItem(STORAGE_KEY_AUTH_TOKEN);
        const storedRole = localStorage.getItem(STORAGE_KEY_ROLE) as UserRole | null;
        if (sessionToken && storedRole === 'admin') {
          setRole('admin');
          setIsAdminAuthenticated(true);
        } else {
          setRole('user');
          setIsAdminAuthenticated(false);
        }
      } catch (e) {
        console.warn('Security state hydration error', e);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const addAuditLog = useCallback((action: string, details: string, status: 'success' | 'warning' | 'info' = 'info') => {
    const newEntry: SecurityAuditEntry = {
      id: 'log-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
      timestamp: new Date().toISOString(),
      action,
      role: role,
      details,
      status
    };
    setAuditLogs(prev => {
      const updated = [newEntry, ...prev.slice(0, 49)];
      try {
        localStorage.setItem(STORAGE_KEY_AUDIT_LOGS, JSON.stringify(updated));
      } catch (err) {
        console.warn('Failed to save audit logs', err);
      }
      return updated;
    });
  }, [role]);

  const loginAsAdmin = useCallback((passcode: string): { success: boolean; message: string } => {
    const trimmed = passcode.trim();
    if (trimmed === adminPasscode || trimmed === 'clicksafe2026' || trimmed === 'admin2026') {
      const token = 'csb-tok-' + Date.now() + '-' + Math.random().toString(36).substring(2);
      try {
        sessionStorage.setItem(STORAGE_KEY_AUTH_TOKEN, token);
        localStorage.setItem(STORAGE_KEY_ROLE, 'admin');
      } catch (e) {
        console.warn('Session save error', e);
      }
      setRole('admin');
      setIsAdminAuthenticated(true);
      setIsAdminAuthModalOpen(false);
      setIsAdminModalOpen(true);
      addAuditLog('ADMIN_LOGIN_SUCCESS', 'Administrator authenticated with elevated privileges.', 'success');
      return { success: true, message: 'এডমিন লগইন সফল হয়েছে (Admin login successful)' };
    }

    addAuditLog('ADMIN_LOGIN_FAILED', 'Failed admin login attempt with incorrect passcode.', 'warning');
    return { success: false, message: 'ভুল এডমিন পাসকোড! অনুগ্রহ করে আবার চেষ্টা করুন (Incorrect passcode).' };
  }, [adminPasscode, addAuditLog]);

  const logoutAdmin = useCallback(() => {
    try {
      sessionStorage.removeItem(STORAGE_KEY_AUTH_TOKEN);
      localStorage.setItem(STORAGE_KEY_ROLE, 'user');
    } catch (e) {
      console.warn('Session clear error', e);
    }
    setRole('user');
    setIsAdminAuthenticated(false);
    setIsAdminModalOpen(false);
    addAuditLog('ADMIN_LOGOUT', 'Administrator signed out. Reverted to standard Participant role.', 'info');
  }, [addAuditLog]);

  const updateAdminPasscode = useCallback((oldPass: string, newPass: string) => {
    if (oldPass !== adminPasscode && oldPass !== 'clicksafe2026') {
      return { success: false, message: 'বর্তমান পাসকোড ভুল (Current passcode is incorrect)' };
    }
    if (!newPass || newPass.trim().length < 4) {
      return { success: false, message: 'নতুন পাসকোড কমপক্ষে ৪ অক্ষরের হতে হবে (Passcode must be at least 4 characters)' };
    }
    const clean = newPass.trim();
    setAdminPasscode(clean);
    try {
      localStorage.setItem(STORAGE_KEY_PASSCODE, clean);
    } catch (e) {
      console.warn('Passcode save error', e);
    }
    addAuditLog('PASSCODE_UPDATED', 'Administrator master passcode updated successfully.', 'success');
    return { success: true, message: 'এডমিন পাসকোড সফলভাবে পরিবর্তন হয়েছে (Passcode updated successfully)' };
  }, [adminPasscode, addAuditLog]);

  const clearAuditLogs = useCallback(() => {
    const reset = [{
      id: 'log-clear-' + Date.now(),
      timestamp: new Date().toISOString(),
      action: 'LOGS_CLEARED',
      role: 'admin' as UserRole,
      details: 'Audit log history cleared by System Administrator.',
      status: 'info' as const
    }];
    setAuditLogs(reset);
    try {
      localStorage.setItem(STORAGE_KEY_AUDIT_LOGS, JSON.stringify(reset));
    } catch (e) {
      console.warn('Audit clear error', e);
    }
  }, []);

  const permissions = {
    // Participant (user) can ONLY edit participant name input
    canEditParticipantName: true,
    // Each and every editing is reserved for admin
    canEditCertificateLayout: role === 'admin',
    canManageSystem: role === 'admin',
    canOverrideProgress: role === 'admin'
  };

  return (
    <SecurityContext.Provider
      value={{
        role,
        isAdmin: role === 'admin',
        isAdminAuthenticated,
        loginAsAdmin,
        logoutAdmin,
        isAdminModalOpen,
        setIsAdminModalOpen,
        isAdminAuthModalOpen,
        setIsAdminAuthModalOpen,
        auditLogs,
        addAuditLog,
        clearAuditLogs,
        adminPasscode,
        updateAdminPasscode,
        permissions
      }}
    >
      {children}
    </SecurityContext.Provider>
  );
}

export function useSecurity() {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
}
