---

Created at: 2023-06-08
Last updated at: 2023-06-08


---

# Sql相关


## Sql相关

#### 字符串分割

将多行字符串合并为1个字符串后在分割多行

    SELECT
        SUBSTRING_INDEX(
            SUBSTRING_INDEX(
                a.faultTypeIDStr,
                ',',
                b.help_topic_id + 1
            ),
            ',' ,- 1
        ) AS faultTypeID
    FROM
        (
            SELECT
                GROUP_CONCAT(faultTypeIDList) AS faultTypeIDStr
            FROM
                trial_case_record tcr
            WHERE
                tcr.detectionStatus = "abnormal"
            AND tcr.openCourtTime >= DATE(NOW())
            AND tcr.openCourtTime < DATE_ADD(DATE(NOW()), INTERVAL 1 DAY)
        ) a
    INNER JOIN mysql.help_topic b ON b.help_topic_id < (
        length(a.faultTypeIDStr) - length(
            REPLACE (a.faultTypeIDStr, ',', '')
        ) + 1
    )


// 去重并统计zong'z

    set @@sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
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
    							',',
    							b.help_topic_id + 1
    						),
    						',' ,- 1
    					) AS faultTypeID
    				FROM
    					(
    						SELECT
    							GROUP_CONCAT(faultTypeIDList) AS faultTypeIDStr
    						FROM
    							trial_case_record tcr
    						WHERE
    							tcr.detectionStatus = "abnormal"
    						AND tcr.openCourtTime >= DATE(NOW())
    						AND tcr.openCourtTime < DATE_ADD(DATE(NOW()), INTERVAL 1 DAY)
    					) a
    				INNER JOIN mysql.help_topic b ON b.help_topic_id < (
    					length(a.faultTypeIDStr) - length(
    						REPLACE (a.faultTypeIDStr, ',', '')
    					) + 1
    				)
    			) c
    		WHERE
    			cff.fileFaultTypeID = c.faultTypeID
    	) AS a
    GROUP BY
    	fileFaultTypeID

