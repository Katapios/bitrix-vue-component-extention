import {Item} from './item';
import "./task-list.css";

export const MyTaskList =
{
	components:
	{
		Item
	},

	data(): object
	{
		return {
			list: []
		}
	},

	methods:
	{
		addNew(): void
		{
			const result = prompt(this.$Bitrix.Loc.getMessage('TASK_LIST_QUESTION'));
			this.list.push(result);
		},

		close(): void
		{
			this.$Bitrix.Application.get().detachTemplate();
		},
	},

	// language=Vue
	template: `
		<div class="tasklist-list">
			<div class="tasklist-list-title">{{$Bitrix.Loc.getMessage('TASK_LIST_TODAY_TITLE')}}</div>
			<template v-for="(value, index) in list" :key="index">
				<Item :position="index+1" :text="value"/>
			</template>
			<template v-if="list.length <= 0">
			  	<div class="tasklist-list-empty">{{$Bitrix.Loc.getMessage('TASK_LIST_LIST_EMPTY')}}</div>
			</template>
			<div class="tasklist-list-buttons">
				<button @click="addNew">{{$Bitrix.Loc.getMessage('TASK_LIST_ADD')}}</button>
				<button @click="close">{{$Bitrix.Loc.getMessage('TASK_LIST_CLOSE')}}</button>
			</div>
		</div>
	`
};