<script>
    export let id       //standard variable
    import {singleDocument} from '../data/importSingleDocument'
    console.log('MYSTATE:',$singleDocument)
    const showHide = false
    const showDrag = false
</script>
<div>
    <h2>Thgis is a card</h2>
    <p>ID# {id}</p>



<!-- {#each $FeedbackStore as fb (fb.id)}
<div in:scale out:fade="{{ duration: 500 }}">
  <h1>{fb.text}</h1>
</div>
{/each} -->
</div>