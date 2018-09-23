<?php
/**
 * Template Name: Migrants - Website
 * Template Post Type: post
 */
$template = '/pages/migrants.twig';
$context['posts'] = new Timber\PostQuery();
$context = Timber::get_context();

Timber::render( $template, $context ); 