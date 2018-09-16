<?php
/**
 * Template Name: Homepage
 */
$template = '/pages/home.twig';
$context['posts'] = new Timber\PostQuery();
$context = Timber::get_context();

Timber::render( $template, $context ); 