<?php
/**
 * Template Name: Gallery
 * Template Post Type: post
 */
$template = '/single-gallery.twig';
$context['posts'] = new Timber\PostQuery();
$context = Timber::get_context();

Timber::render( $template, $context ); 