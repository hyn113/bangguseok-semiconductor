import {useSyncExternalStore} from 'react';

/* 화면 모드: 'system'(기본) | 'light' | 'dark'. 이 브라우저에만 기억해요. */
export type ThemeMode='system'|'light'|'dark';
const KEY='semilab.theme';
const listeners=new Set<()=>void>();
const read=():ThemeMode=>{try{const v=localStorage.getItem(KEY);return v==='light'||v==='dark'?v:'system'}catch{return 'system'}};
let mode:ThemeMode=read();
const apply=()=>{const root=document.documentElement;if(mode==='system')root.removeAttribute('data-theme');else root.setAttribute('data-theme',mode)};
apply();
const systemDark=()=>typeof window.matchMedia==='function'&&window.matchMedia('(prefers-color-scheme: dark)').matches;
export const isDark=()=>mode==='dark'||(mode==='system'&&systemDark());
export function setTheme(next:ThemeMode){mode=next;try{next==='system'?localStorage.removeItem(KEY):localStorage.setItem(KEY,next)}catch{}apply();listeners.forEach(l=>l())}
export const toggleTheme=()=>setTheme(isDark()?'light':'dark');
if(typeof window.matchMedia==='function')window.matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change',()=>listeners.forEach(l=>l()));
export function useDarkMode(){return useSyncExternalStore(l=>{listeners.add(l);return()=>{listeners.delete(l)}},isDark,isDark)}
