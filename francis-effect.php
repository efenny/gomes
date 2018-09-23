<?php
/**
 * Template Name: Francis Effect
 * Template Post Type: post
 */
$template = '/pages/francis-effect.twig';
$context['posts'] = new Timber\PostQuery();
$context = Timber::get_context();

Timber::render( $template, $context ); 