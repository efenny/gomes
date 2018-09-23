<?php
/**
 * Template Name: Fransiscan Friars
 * Template Post Type: post
 */
$template = '/pages/fransiscan-friars.twig';
$context['posts'] = new Timber\PostQuery();
$context = Timber::get_context();

Timber::render( $template, $context ); 