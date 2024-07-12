import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [vue()],
    server: { // 用于配置开发服务器的选项
        port: 8080, //启动端口
        hmr: {
            host: '127.0.0.1',
            port: 8080
        },
        // 设置 https 代理
        proxy: {
            '/api': { // 匹配所有以 /api 开头的请求
                target: 'your https address',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, '')  // 将路径中以 /api 开头的部分替换为空字符串，以便正确代理请求
            }
        }
    }
});