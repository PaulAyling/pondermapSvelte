<script>
    export let id       //standard variable
    import {singleDocument} from '../data/importSingleDocument'
    import Form from '../components/form.svelte'
    console.log('MYSTATE:',$singleDocument)
    const showHide = false
    const showDrag = false
    let myDict = [{name:'bob'},{name:'Jane'}]
    let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
  let startingId = 2
</script>
<div>
    <h2>Thhis is a card</h2>
    <p>ID# {id}</p>
    <ul>

      {#each myDict as {  name }, i}
      <li> my name is {name}</li> 
      {/each}
    </ul>
      <Form id={startingId}/>




<!-- {#each $FeedbackStore as fb (fb.id)}
<div in:scale out:fade="{{ duration: 500 }}">
  <h1>{fb.text}</h1>
</div>
{/each} -->
</div>