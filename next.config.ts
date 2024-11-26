import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  base_path: '/rig-docs'
});

export default withNextra(
  {
    output: 'export',
    images: { unoptimized: true }
  }
);
