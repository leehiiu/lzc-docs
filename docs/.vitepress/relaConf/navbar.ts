/*
 * @Description: 
 * @Author: 李泽诚
 * @Date: 2024-03-28 16:28:27
 * @LastEditors: 李泽诚
 * @LastEditTime: 2024-04-01 10:52:54
 */
import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '个人成长',
    items: [
      {
        text: '大江南北游记',
        link: '/column/Travel/'
      },
      {
        text: '所思·所想',
        link: '/column/Growing/'
      },
      {
        text: '电影·连续剧',
        link: '/column/Movie/'
      }
    ]
  },
  {
    text: '前端开发',
    items: [
      {
        text: '数据结构与算法',
        link: '/column/Algorithm/'
      }
    ]
  },
  {
    text: '关于我',
    items: [
      { text: 'Github', link: 'https://github.com/leehiiu' },
      {
        text: '掘金',
        link: 'https://juejin.cn/user/3285766295000775/posts'
      },
      {
        text: '小红书',
        link: 'https://www.xiaohongshu.com/user/profile/5d3957f30000000016012b12'
      },
      {
        text: 'Bilibili',
        link: 'https://space.bilibili.com/15032077'
      }
    ]
  }
];
