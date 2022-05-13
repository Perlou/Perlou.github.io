/**
 * App.ts
 * @author Perlou(perloukevin@gmail.com)
 */

import * as THREE from 'three'
// import Debug from './Utils/Debug';
// import Sizes from './Utils/Sizes';
// import Time from './Utils/Time';
// import Camera from './Camera/Camera';
// import Renderer from './Renderer';
// import Mouse from './Utils/Mouse';

// //@ts-ignore
// import World from './World/World';
// import Resources from './Utils/Resources';

// import sources from './sources';

// import Stats from 'stats.js';
// import Loading from './Utils/Loading';

// import UI from './UI';

// let instance: Application | null = null;

import UI from '@/UI'

let instance: App | null = null

export default class App {
    ui!: UI

    constructor() {
        if (instance) {
            return instance
        }

        instance = this

        this.ui = new UI()
    }
}
