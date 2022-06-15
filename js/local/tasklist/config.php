<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
    die();
}

return [
    'css' => './dist/tasklist.bundle.css',
    'js' => './dist/tasklist.bundle.js',
    'rel' => [
		'ui.vue3',
		'main.core',
	],
    'skip_core' => false,
];