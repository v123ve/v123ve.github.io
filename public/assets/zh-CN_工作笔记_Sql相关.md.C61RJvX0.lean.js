import{_ as e,c as n,a3 as a,o as l}from"./chunks/framework.BaR4VHXY.js";const E=JSON.parse('{"title":"Sql相关","description":"","frontmatter":{"Created at":"2023-06-08T00:00:00.000Z","Last updated at":"2023-06-08T00:00:00.000Z"},"headers":[],"relativePath":"zh-CN/工作笔记/Sql相关.md","filePath":"zh-CN/工作笔记/Sql相关.md","lastUpdated":null}'),r={name:"zh-CN/工作笔记/Sql相关.md"};function o(p,t,T,i,c,_){return l(),n("div",null,t[0]||(t[0]=[a(`<h1 id="sql相关" tabindex="-1">Sql相关 <a class="header-anchor" href="#sql相关" aria-label="Permalink to &quot;Sql相关&quot;">​</a></h1><h2 id="sql相关-1" tabindex="-1">Sql相关 <a class="header-anchor" href="#sql相关-1" aria-label="Permalink to &quot;Sql相关&quot;">​</a></h2><h4 id="字符串分割" tabindex="-1">字符串分割 <a class="header-anchor" href="#字符串分割" aria-label="Permalink to &quot;字符串分割&quot;">​</a></h4><p>将多行字符串合并为1个字符串后在分割多行</p><pre><code>SELECT
    SUBSTRING_INDEX(
        SUBSTRING_INDEX(
            a.faultTypeIDStr,
            &#39;,&#39;,
            b.help_topic_id + 1
        ),
        &#39;,&#39; ,- 1
    ) AS faultTypeID
FROM
    (
        SELECT
            GROUP_CONCAT(faultTypeIDList) AS faultTypeIDStr
        FROM
            trial_case_record tcr
        WHERE
            tcr.detectionStatus = &quot;abnormal&quot;
        AND tcr.openCourtTime &gt;= DATE(NOW())
        AND tcr.openCourtTime &lt; DATE_ADD(DATE(NOW()), INTERVAL 1 DAY)
    ) a
INNER JOIN mysql.help_topic b ON b.help_topic_id &lt; (
    length(a.faultTypeIDStr) - length(
        REPLACE (a.faultTypeIDStr, &#39;,&#39;, &#39;&#39;)
    ) + 1
)
</code></pre><p>// 去重并统计zong&#39;z</p><pre><code>set @@sql_mode=&#39;STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION&#39;;
SELECT
	a.fileFaultTypeID,
	a.fileFaultTypeName,
	count(DISTINCT id)
FROM
	(
		SELECT
			ceiling(rand() * 900000 + 100000) AS id,
			cff.fileFaultTypeID,
			cff.fileFaultTypeName
		FROM
			const_file_fault cff,
			(
				SELECT
					SUBSTRING_INDEX(
						SUBSTRING_INDEX(
							a.faultTypeIDStr,
							&#39;,&#39;,
							b.help_topic_id + 1
						),
						&#39;,&#39; ,- 1
					) AS faultTypeID
				FROM
					(
						SELECT
							GROUP_CONCAT(faultTypeIDList) AS faultTypeIDStr
						FROM
							trial_case_record tcr
						WHERE
							tcr.detectionStatus = &quot;abnormal&quot;
						AND tcr.openCourtTime &gt;= DATE(NOW())
						AND tcr.openCourtTime &lt; DATE_ADD(DATE(NOW()), INTERVAL 1 DAY)
					) a
				INNER JOIN mysql.help_topic b ON b.help_topic_id &lt; (
					length(a.faultTypeIDStr) - length(
						REPLACE (a.faultTypeIDStr, &#39;,&#39;, &#39;&#39;)
					) + 1
				)
			) c
		WHERE
			cff.fileFaultTypeID = c.faultTypeID
	) AS a
GROUP BY
	fileFaultTypeID
</code></pre>`,7)]))}const N=e(r,[["render",o]]);export{E as __pageData,N as default};
