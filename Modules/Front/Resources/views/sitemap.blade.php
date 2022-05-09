<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <?php foreach($links ?? [] as $link):?>
    <url>
        <loc><?=$link['url']?></loc>
        <lastmod><?=$link['date']?></lastmod>
    </url>
    <?php endforeach; ?>
</urlset>
