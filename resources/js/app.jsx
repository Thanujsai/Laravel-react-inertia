import './bootstrap';
import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import Layout from '@/Layouts/Layout';

createInertiaApp({
  title: title => title ? `${title} - Laravel-Inertia-React`:'Laravel-Inertia-React',
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page = pages[`./Pages/${name}.jsx`]
    page.default.layout = page.default.layout || ((page) => <Layout children={page} />);//if the page has default layout use that one, otherwise use our layout
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  // progress: {color: '#FFFFFF', showSpinner: true}//progress indicator from inertia js, spinner will be shown at top right corner
})