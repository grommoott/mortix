import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
			"@header": __dirname + "/src/components/0.Header/",
			"@about": __dirname + "/src/components/1.About/",
			"@history": __dirname + "/src/components/2.History/",
			"@employees": __dirname + "/src/components/3.Employees/",
			"@connection": __dirname + "/src/components/4.Connection/",
			"@footer": __dirname + "/src/components/5.Footer/",
			"@hooks": __dirname + "/src/hooks/",
			"@data": __dirname + "/src/data/",
			"@components": __dirname + "/src/components/"
		},
    },
})
