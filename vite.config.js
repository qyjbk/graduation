import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 按需引入elementui
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 配置路径别名
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
		alias: {
			"@": path.resolve(__dirname, 'src')
		}
	}
})
