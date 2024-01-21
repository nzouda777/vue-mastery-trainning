import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'


const gyzer = createApp(App)
gyzer.use(router)


const requireComponent = require.context(
    './components', // Répertoire où se trouvent vos composants
    false,
    /App[A-Z]\w+\.(vue|js)$/ // Expression régulière pour correspondre aux noms de fichiers de composants
  );
  
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName
      .split('/')
      .pop()
      .replace(/\.\w+$/, '');
  
    gyzer.component(
      componentName,
      componentConfig.default || componentConfig
    );
  });

  
gyzer.mount('#app')
