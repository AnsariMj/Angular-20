import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { App } from './app';
import { Signal } from './components/signal/signal';

export const routes: Routes = [

    {
        path:'',
        component:DataBinding,
        children:[
            {
                path:'data-binding',
                component:DataBinding
            },
            {
                path:'signal',
                component:Signal
            },
        ]
    }
];
