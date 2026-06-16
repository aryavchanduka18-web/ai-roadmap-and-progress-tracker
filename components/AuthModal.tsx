'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SignIn, SignUp } from '@clerk/nextjs';
import { Rocket, X } from 'lucide-react';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  initialMode?: 'sign-in' | 'sign-up';
}

export function AuthModal({ open, onClose, initialMode = 'sign-in' }: AuthModalProps) {
  const [mode, setMode] = useState<'sign-in' | 'sign-up'>(initialMode);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode, open]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute -top-2 right-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:border-zinc-700 hover:text-zinc-100"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="space-y-5">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-amber-400 text-zinc-950 shadow-lg">
                  <Rocket className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
                  {mode === 'sign-in' ? 'Welcome back' : 'Create your account'}
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  {mode === 'sign-in'
                    ? 'Sign in to track your AI roadmap progress.'
                    : 'Start tracking your 40-week AI Engineer journey.'}
                </p>
              </div>

              <div className="flex justify-center">
                {mode === 'sign-in' ? (
                  <SignIn routing="hash" signUpUrl="#sign-up" afterSignInUrl="/" />
                ) : (
                  <SignUp routing="hash" signInUrl="#sign-in" afterSignUpUrl="/" />
                )}
              </div>

              <div className="text-center text-xs text-zinc-500">
                {mode === 'sign-in' ? (
                  <>
                    New here?{' '}
                    <button
                      onClick={() => setMode('sign-up')}
                      className="font-medium text-brand-400 underline-offset-4 hover:underline"
                    >
                      Create an account
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button
                      onClick={() => setMode('sign-in')}
                      className="font-medium text-brand-400 underline-offset-4 hover:underline"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
