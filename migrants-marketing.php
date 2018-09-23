<?php
/**
 * Template Name: Migrants - Marketing
 * Template Post Type: post
 */
$template = '/pages/migrants-marketing.twig';
$context['posts'] = new Timber\PostQuery();
$context = Timber::get_context();

Timber::render( $template, $context ); 