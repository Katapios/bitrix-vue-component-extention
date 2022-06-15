import {BitrixVue} from "ui.vue3";
import {Dom, Loc} from 'main.core';

import {MyTaskList} from "./component/task-list";

export class TaskList
{
    #application;

    constructor(rootNode): void
    {
        this.rootNode = document.querySelector(rootNode);
    }

    start(): void
    {
        const button = Dom.create('button', {
            text: Loc.getMessage('TASK_LIST_OPEN'),
            events: {
                click: () => this.attachTemplate()
            },
        });
        Dom.append(button, this.rootNode);
    }

    attachTemplate(): void
    {
        const context = this;

        this.#application = BitrixVue.createApp({
            name: 'TaskList',
            components: {
                MyTaskList
            },
            beforeCreate(): void
            {
                this.$bitrix.Application.set(context);
            },
            template: '<MyTaskList/>'
        });
        this.#application.mount(this.rootNode)
    }

    detachTemplate(): void
    {
        if (this.#application)
        {
            this.#application.unmount();
        }

        this.start();
    }
}