<?php
/**
 * Template Name: S+L Magazine
 * Template Post Type: post
 */
$template = '/pages/s-l-magazine.twig';
$context['posts'] = new Timber\PostQuery();
$context = Timber::get_context();

Timber::render( $template, $context ); 