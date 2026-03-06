import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'za.co.big5.securityops',
  appName: 'Big 5 Security Ops',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: false,
    webContentsDebuggingEnabled: false
  }
};

export default config;

