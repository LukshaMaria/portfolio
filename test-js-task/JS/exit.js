function exit()
{
    if(confirm("Вы действительно хотите покинуть свой аккаунт?", ''))
    {
        window.location.reload();
    }
}