<?php
/**
 * Template Name: Retouching
 */
$template = '/pages/retouching.twig';
$context['posts'] = new Timber\PostQuery();
$context = Timber::get_context();

Timber::render( $template, $context ); 