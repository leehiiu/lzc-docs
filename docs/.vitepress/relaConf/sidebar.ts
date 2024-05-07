/*
 * @Description: 
 * @Author: 李泽诚
 * @Date: 2024-03-28 16:28:27
 * @LastEditors: 李泽诚
 * @LastEditTime: 2024-05-07 11:09:29
 */
import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  '/column/Algorithm/': [
    {
      text: 'vsCode插件与vue Vapor',
      items: [
        {
          text: 'vsCode插件',
          link: '/column/Algorithm/001_Stack'
        },
        {
          text: 'vue Vapor',
          link: '/column/Algorithm/002_Queue'
        }
      ]
    },
    {
      text: '字典和树',
      items: [
        {
          text: '字典和集合-Set和Map',
          link: '/column/Algorithm/003_Dictionary'
        },
        {
          text: '树-深/广度优先遍历',
          link: '/column/Algorithm/004_Tree'
        }
      ]
    }
  ]
};
