module.exports = {
  title: '接口文档',
  description: '接口文档',
  dest: 'public',
  themeConfig: {
    repo: 'https://github.com/Jackson0714/BirdDoc',
    repoLabel: '源码',
    lastUpdated: '上次更新',
    sidebar: getSidebar(),
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.set({
        breaks: true,
        linkify: true,
      });
      md.use(require('markdown-it-mermaid').default);
      md.use(require('markdown-it-footnote'));
    },
  },
  evergreen: true,
};

function getSidebar() {
  return [
    '',
    'CONTRIBUTING',
    {
      title: '会员',
      children: [
        'member/query'
      ],
    },
    {
      title: '优惠券',
      children: [
        'coupon/query'
      ],
    }
  ];
};
