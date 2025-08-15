import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { App } from './app';
import { Signal } from './components/signal/signal';
import { ContrlFlow } from './components/contrl-flow/contrl-flow';
import { AttDirective } from './components/Directive/att-directive/att-directive';


export const routes: Routes = [
    {
        path: '',
        component: DataBinding,
        children: [
            // {
            //     path:'data-binding',
            //     component:DataBinding
            // },
            // {
            //     path: 'signal',
            //     component: Signal
            // },
        ]
    },
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path: 'signal',
        component: Signal
    },
    {
        path: 'control',
        component: ContrlFlow
    },
    {
        path: 'attr-dir',
        component: AttDirective
    },

];
