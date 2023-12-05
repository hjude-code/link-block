/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, InnerBlocks, InspectorControls} from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl, GradientPicker } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {

	const {
		attributes:{Icon, Link, Headline, Location, BarColor},
		setAttributes,
		className,
	} = props;

	const onChangeBarColor = ( newBarColor ) => {
		setAttributes( { BarColor: newBarColor } );
	};
	const onChangeLink = ( newLink ) => {
		setAttributes( { Link: newLink } );
	};
	const onChangeIcon = ( newIcon ) => {
		setAttributes( { Icon: newIcon } );
	};
	const onChangeHeadline = ( newHeadline ) => {
		setAttributes( { Headline: newHeadline } );
	};
	const onChangeLocation = ( newLocation ) => {
		setAttributes( { Location: newLocation } );
	};


	const blockProps = useBlockProps();

	const BarStyle={
		background: BarColor
	}

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<GradientPicker
							label="color"
							value={BarColor}
							onChange={onChangeBarColor}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="link"
							value={Link}
							onChange={onChangeLink}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Icon"
							value={Icon}
							onChange={onChangeIcon}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<a>
				<div class="IconBar" style={BarStyle}>
					<img src={Icon}/>
				</div>
				<div class="BlockCopy">
					<RichText
					tagName='h3'
					value={Headline}
					onChange={onChangeHeadline}
					/>
					<RichText
					tagName='h4'
					value={Location}
					onChange={onChangeLocation}
					/>
				</div>
			</a>
		</div>
	);
}
