import "./item.css";

export const Item =
{
	props:
	{
		position: { default: 0 },
		text: { default: '' },
	},

	// language=Vue
	template: `
		<div class="tasklist-list-item">{{position}}. {{text}}</div>
	`
};
