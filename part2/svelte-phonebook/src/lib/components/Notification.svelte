<script>
    let {notification} = $props()
</script>

{#if notification.message != ''}
    <div class="noti" style="color: {notification.error ? "red":"green"}">
        <p>{notification.message}</p>
    </div>
{/if}

<style>
    .noti {
        background: lightgrey;
        font-size: 20px;
        border-style: solid;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
    }
</style>