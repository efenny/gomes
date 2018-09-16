<?php
/**
 * Template Name: About
 */
$template = '/pages/about.twig';
$context['posts'] = new Timber\PostQuery();
$context = Timber::get_context();

Timber::render( $template, $context ); 