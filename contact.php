<?php
/**
 * Template Name: Contact
 */
$template = '/pages/contact.twig';
$context['posts'] = new Timber\PostQuery();
$context = Timber::get_context();

Timber::render( $template, $context );