<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

 $IconURL = "src=".$attributes['Icon'];
 $BlockLink = "href=".$attributes['Link'];
 $BarStyle = "background:".$attributes['BarColor'].";";

?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<a <?php echo($BlockLink); ?> target="_blank" >
		<div class="IconBar" style="<?php echo($BarStyle); ?>">
			<img <?php echo($IconURL); ?>>
		</div>
		<div class="BlockCopy">
			<?php echo $content ?>
			<h3>
				<?php echo($attributes['Headline']); ?>
			</h3>
			<h4>
				<?php echo($attributes['Location']); ?>
			</h3>
		</div>
	</a>
</div>
