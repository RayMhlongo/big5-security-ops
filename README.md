# Big 5 Security Ops

Production-ready Android-first PWA + Capacitor app for Big 5 field operations.

## New Final Update: First Login Role + Branch Workflow
- On first Google login, user selects role (`Security Guard`, `Admin`, `Management`, `Owner`).
- Non-owner users select branch.
- Owner auto-gets full all-branch scope.
- Profile is stored in Firebase and IndexedDB for offline recovery.
- Offline onboarding is queued and synced automatically.

## Role-Based Access Control
- `Security Guard`: patrol/incident/attendance/panic actions.
- `Admin`: branch config, user monitoring, QR/admin tools, exports.
- `Management`: monitoring and reporting (read-only field modules).
- `Owner`: full access with branch selector.

## Branch-Aware Operations
Branch metadata is enforced in all operational writes:
- `BIG5_patrol`
- `BIG5_incident`
- `BIG5_attendance`
- `BIG5_panic`
- `BIG5_activity`

## Retained Features
- Offline IndexedDB sync queue
- Google Maps patrol view
- QR generation system
- Firebase Storage incident photos
- Google Sheets attendance webhook
- CSV exports
- AI assistant module
- Audit logs

## Mobile Display/UX Hardening
- Safe-area support for notched devices
- Stable system font stack
- Large controls for low-end Android phones

## Setup
1. `npm install`
2. Copy `.env.example` to `.env`
3. Fill Firebase + Maps + Sheets values
4. `npm run dev`
5. `npm run build`

## Firebase Deploy
- `firebase deploy --only firestore:rules,firestore:indexes,hosting`

## Android APK Build
1. `npm run build`
2. `npm run android:sync`
3. `npm run android:open`
4. Build signed APK in Android Studio

## Stress Test
- `npm run stress:test`

## GitHub
- https://github.com/RayMhlongo/big5-security-ops
