<?php
/**
 * Template Name: Before & After
 */
$template = '/pages/before-after.twig';
$context['posts'] = new Timber\PostQuery();
$context = Timber::get_context();

Timber::render( $template, $context ); 