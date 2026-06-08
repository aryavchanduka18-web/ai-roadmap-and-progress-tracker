'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser, useClerk } from '@clerk/nextjs';
import { ChevronUp, LogIn, LogOut, Settings, User as UserIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  collapsed: boolean;
  onSignInClick: () => void;
}

export function ProfilePill({ collapsed, onSignInClick }: Props) {
  const { user, isLoaded } = useUser();
  const { signOut, openUserProfile } = useClerk();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [open]);

  if (!isLoaded) {
    return (
      <div
        className={cn(
          'flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-2 py-2',
          collapsed && 'justify-center'
        )}
      >
        <div className="h-7 w-7 flex-shrink-0 animate-pulse rounded-full bg-zinc-800" />
        {!collapsed && <div className="h-3 flex-1 animate-pulse rounded bg-zinc-800" />}
      </div>
    );
  }

  // Signed-out: render Sign In button
  if (!user) {
    return (
      <button
        onClick={onSignInClick}
        className={cn(
          'group flex w-full items-center gap-2.5 rounded-lg border border-brand-500/30 bg-brand-500/10 px-2.5 py-2 text-brand-300 transition hover:border-brand-500/60 hover:bg-brand-500/20',
          collapsed && 'justify-center px-1.5'
        )}
        aria-label="Sign in"
      >
        <LogIn className="h-4 w-4 flex-shrink-0" />
        {!collapsed && (
          <span className="text-xs font-semibold tracking-wide">Sign in / Sign up</span>
        )}
      </button>
    );
  }

  // Signed-in: render profile pill with dropdown
  const fullName = [user.firstName, user.lastName].filter(Boolean).join(' ').trim();
  const displayName = fullName || user.username || user.primaryEmailAddress?.emailAddress || 'You';
  const email = user.primaryEmailAddress?.emailAddress ?? '';
  const initials = ((user.firstName?.[0] ?? '') + (user.lastName?.[0] ?? '') || displayName[0] || '?')
    .toUpperCase()
    .slice(0, 2);
  const avatarUrl = user.imageUrl;

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'group flex w-full items-center gap-2.5 rounded-lg border border-transparent px-2 py-2 transition',
          'hover:border-zinc-800 hover:bg-zinc-900',
          open && 'border-zinc-800 bg-zinc-900',
          collapsed && 'justify-center px-1.5'
        )}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Avatar src={avatarUrl} initials={initials} />
        {!collapsed && (
          <>
            <div className="min-w-0 flex-1 text-left">
              <div className="truncate text-xs font-semibold text-zinc-100">
                {displayName.toUpperCase()}
              </div>
            </div>
            <motion.span
              animate={{ rotate: open ? 0 : 180 }}
              transition={{ duration: 0.18 }}
              className="text-zinc-500 group-hover:text-zinc-300"
            >
              <ChevronUp className="h-3.5 w-3.5" />
            </motion.span>
          </>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.14, ease: 'easeOut' }}
            role="menu"
            className={cn(
              'absolute z-50 w-56 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl',
              collapsed ? 'bottom-0 left-full ml-2' : 'bottom-full mb-2 left-0 right-0'
            )}
          >
            <div className="border-b border-zinc-800 px-3 py-2.5">
              <div className="flex items-center gap-2.5">
                <Avatar src={avatarUrl} initials={initials} />
                <div className="min-w-0">
                  <div className="truncate text-xs font-semibold text-zinc-100">{displayName}</div>
                  {email && <div className="truncate text-[10px] text-zinc-500">{email}</div>}
                </div>
              </div>
            </div>
            <div className="p-1">
              <MenuItem
                icon={UserIcon}
                label="Profile"
                onClick={() => {
                  openUserProfile();
                  setOpen(false);
                }}
              />
              <MenuItem
                icon={Settings}
                label="Account settings"
                onClick={() => {
                  openUserProfile();
                  setOpen(false);
                }}
              />
              <div className="my-1 h-px bg-zinc-800" />
              <MenuItem
                icon={LogOut}
                label="Sign out"
                onClick={() => signOut({ redirectUrl: '/' })}
                danger
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Avatar({ src, initials }: { src?: string; initials: string }) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt=""
        className="h-7 w-7 flex-shrink-0 rounded-full border border-zinc-800 object-cover"
      />
    );
  }
  return (
    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 text-[10px] font-bold text-zinc-950">
      {initials}
    </div>
  );
}

function MenuItem({
  icon: Icon,
  label,
  onClick,
  danger,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      role="menuitem"
      onClick={onClick}
      className={cn(
        'flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-xs transition',
        danger
          ? 'text-rose-300 hover:bg-rose-500/10'
          : 'text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100'
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </button>
  );
}
