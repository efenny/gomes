<?php
/**
 * Template Name: Migrants
 */
$template = '/pages/migrants.twig';
$context['posts'] = new Timber\PostQuery();
$context = Timber::get_context();

Timber::render( $template, $context ); 