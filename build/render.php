<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

 $IconURL = "src=".$attributes['Icon'];
 $BlockLink = "href=".$attributes['Link'];

?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<a <?php echo($BlockLink); ?> >
		<div class="IconBar">
			<img <?php echo($IconURL); ?>>
		</div>
		<h3>
		<?php echo($attributes['Headline']); ?>
		</h3>
		<h3>
		<?php echo($attributes['Location']); ?>
		</h3>
	</a>
</div>
