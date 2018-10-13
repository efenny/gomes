<?php
/**
 * Template Name: Homepage
 */
$template = '/pages/home.twig';
$context['posts'] = new Timber\PostQuery();
$context = Timber::get_context();

$args = array(
	'posts_per_page' => -1,
	'category_name' => 'design'
);

$context['cases'] = new Timber\PostQuery($args);

Timber::render( $template, $context );