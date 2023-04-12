// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';

export default {
  // ... other Rollup configuration ...
  plugins: [
    // ... other plugins ...
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
    }),
  ],
};
