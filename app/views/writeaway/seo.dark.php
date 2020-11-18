<?php /** @var \Spiral\Writeaway\Editor $writeawayEditor */ ?>
@inject($writeawayEditor, \Spiral\Writeaway\Editor::class)
<title>${title}</title>
<meta name="description" content="${description}" />
<meta name="keywords" content="${keywords}" />
<?php ob_start(); ?>
${context}
<?php
$pieceData = $writeawayEditor->getPiece(
    'seo',
    inject('id'),
    ['header' => ob_get_clean()],
    $this->view->getNamespace(),
    $this->view->getName()
);
echo $pieceData['header']
?>
@if($writeawayEditor->allows('seo', inject('id')))
    <script type="application/javascript">
        var SEO_META = {
            id: "${id}",
            namespace: "{{ $this->view->getNamespace() }}",
            view: "{{ $this->view->getName() }}"
        }
        var SEO_HEADER = "<?php echo $pieceData['header'] ?>"
    </script>
@endif
