<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <title>Park hills Lots: Current Prices</title>
    <?php include('includes/meta.php'); ?>
    <meta http-equiv="cache-control" CONTENT="no-cache">
    <meta http-equiv="pragma" CONTENT="no-cache">
</head>
<body ontouchmove="BlockMove(event);">
    <?php include('includes/header.php'); ?>
    <section>
        <?php include('includes/menu.php'); ?>
        <article class="prices">
            <table id="prices">
                <thead>
                    <tr>
                        <th>Lot Number</th>
                        <th>Price</th>
                        <th>Smith Avenue</th>
                        <th>MLS</th>
                        <th>Acreage</th>
                        <th>Lot Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
            <p style="text-align:center;">Prices subject to change at any time without notice</p>
        </article>
    </section>
    <?php include('includes/footer.php'); ?>
</body>
</html>