<?php
/**
 * Template Name: Switchboard
 * Template Post Type: post
 */
$template = '/pages/switchboard.twig';
$context['posts'] = new Timber\PostQuery();
$context = Timber::get_context();

Timber::render( $template, $context ); 