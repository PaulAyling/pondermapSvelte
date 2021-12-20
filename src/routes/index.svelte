<!-- src/routes/index.svelte -->
<script>
    import Card from '../components/card.svelte'
    let name = 'Paul'
    const startId = 1
</script>
<svelte:head>
	<title>Welcome</title>
</svelte:head>

<h1>Hello and welcome to my site!</h1>
<h2>{name}</h2>
<Card id={startId}/>