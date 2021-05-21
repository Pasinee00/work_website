<!DOCTYPE html>
<html>
    <head>
        <title>อ่านข้อมูลไฟล์จาก directory ทั้งหมด</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="w3-css.css">
    </head>
    <body class="w3-container">
        <table class="w3-table  w3-bordered w3-card-4">
            <h3 class="w3-center"> ชื่อไฟล์ใน D:/game/ps1</h3>
            <?php
            
	        include 'con_fig/db.php';
            $sql="SELECT * 
            FROM
            master_doc";
            $query=mysql_query($sql);
            $i=0;
            // while($row=mysql_fetch_array($query)){
            //     $sql_insert ="INSERT INTO make_doc (Master_doc_id) value ('$row[id]')";
            //     $query_insert=mysql_query($sql_insert);
            //     echo $i.' '.$row[id].'</br>';
            //     $i++;
            // }

            // echo $sql_insert;
            $sql_selert="SELECT * 
            FROM
            make_doc";
            $query_select=mysql_query($sql_selert);
            while($row=mysql_fetch_array($query_select)){
                    $namefile =  explode("http://10.2.1.184/website/backoffice/default/",$row["file_pdf"]);
                    $sql_update = "UPDATE make_doc SET file_pdf = '$namefile[1]' WHERE id = '$row[id]'";
                    $query_update=mysql_query($sql_update);
                    echo $sql_update.'<br>';
                    echo $namefile[1].'</br>';
                    
                    $i++;
                }
            $pathDir = "C:\AppServ\www\all_doc";
            $openDir = opendir($pathDir); // ต้อง opendir()ก่อนถึงจะ read ได้
            echo '<tr>'
            . '<th>ชื่อไฟล์</th>'
            . '<th>ชนิดไฟล์</th>'
            . '<th>ขนาดไฟล์</th>'
            . '</tr>';
            // while ($file = readdir($openDir)) {
               
            //     if ($file == "." || $file == "..") {
            //         continue;
            //     }
                
            //     $name_file = explode(" ",$file);
            //     $name_file1 = substr( $name_file[0], 0, 4 ).'/'.substr( $name_file[0], 4, 10 );
            //     $fileName = $file;
            //     //readdir() มันอ่านได้แค่ชื่อมาแต่เราต้องการข้อมูลมากกว่านนั้นทำต่อ
            //     $fullPath = $pathDir . "/" . $file; // เอาตำแหน่งเต็มๆมา
            //     $type = "dir";

            //     if (is_file($fullPath)) { // ตรวจว่า $fullpath ใช่ไฟล์ไหม
            //         $information = pathinfo($fullPath); //pathinfo() แตกข้อมูลของ $fullpath
            //         $type = $information['extension']; //extension คือ นามสกุลไฟล์
            //     }
            //     $sql_selert1="SELECT master_doc.id 
            //     FROM
            //     make_doc
            //     LEFT JOIN master_doc ON master_doc.id = make_doc.Master_doc_id
            //     WHERE Doc_code = '$name_file1'";
            //     echo $name_file1.'</br>';  
            //     $query_select1=mysql_query($sql_selert1);
            //     while($row1=mysql_fetch_array($query_select1)){
                        
                        // $sql_update = "UPDATE make_doc SET file_pdf = 'http://10.2.1.184/website/backoffice/default/Master_doc/$fileName' WHERE Master_doc_id = '$row1[id]'";
                        
                     // $query_update=mysql_query($sql_update);
                     // echo  $sql_update.'<br>';
            //             $i++;
            //         }
            //     $size = filesize($fullPath); // หาขนาดของไฟล์ได้มาเป็น Bytes
            //     if ($size >= 1073741824) {
            //         $size = round($size / 1073741824, 2) . " GB"; //เอาทศนิยม 2 ตำแหน่ง
            //     } elseif ($size >= 1048576) {
            //         $size = round($size / 1048576, 2) . " MB";
            //     } elseif ($size >= 1024) {
            //         $size = round($size / 1024, 2) . " KB";
            //     }
            //     echo "<tr>
            // <th>$fileName---$name_file[0]///master_doc/$fileName</th>
            // <th>$type</th>
            // <th>$size</th>
            // </tr>";
            // }
            ?>
        </table>
    </body>
</html>