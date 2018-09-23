<?php
/**
 * Template Name: Blue Ocean
 * Template Post Type: post
 */
$template = '/pages/blue-ocean.twig';
$context['posts'] = new Timber\PostQuery();
$context = Timber::get_context();

Timber::render( $template, $context ); 